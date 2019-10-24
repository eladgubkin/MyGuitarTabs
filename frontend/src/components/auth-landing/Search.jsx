import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// SVG
import svgTabs from '../../assets/svg/guitar-tabs.svg';
import svgChords from '../../assets/svg/guitar.svg';
import svgSheets from '../../assets/svg/music-note.svg';
import svgLabelFilled from '../../assets/svg/label-filled.svg';
import svgHelp from '../../assets/svg/help.svg';

// Material UI
import { Card, Button, Collapse } from '@material-ui/core';

const data = {
  instruments: [
    {
      desc: 'Acoustic',
      icon: svgChords
    },
    {
      desc: 'Electric',
      icon: svgChords
    },
    {
      desc: 'Bass',
      icon: svgChords
    },
    {
      desc: 'Ukulele',
      icon: svgChords
    },
    {
      desc: 'Twelve-string',
      icon: svgChords
    }
  ],
  types: [
    {
      desc: 'Tabs',
      icon: svgTabs
    },
    {
      desc: 'Chords',
      icon: svgChords
    },
    {
      desc: 'Sheets',
      icon: svgSheets
    }
  ],
  labels: [
    {
      desc: 'Rock',
      icon: svgLabelFilled
    },
    {
      desc: 'Jazz',
      icon: svgLabelFilled
    },
    {
      desc: 'Metal',
      icon: svgLabelFilled
    },
    {
      desc: 'Folk',
      icon: svgLabelFilled
    },
    {
      desc: 'Blues',
      icon: svgLabelFilled
    },
    {
      desc: 'Pop',
      icon: svgLabelFilled
    },
    {
      desc: 'Classical',
      icon: svgLabelFilled
    }
  ],
  themes: [
    {
      desc: 'Alloy',
      icon: svgHelp
    },
    {
      desc: 'Space',
      icon: svgHelp
    },
    {
      desc: 'Slate',
      icon: svgHelp
    }
  ]
};

const Search = props => {
  const [settings, setSettings] = useState([
    { index: 0, open: false },
    { index: 1, open: false },
    { index: 2, open: false },
    { index: 3, open: false }
  ]);

  const handleButtonClick = (e, index) => {
    if (e.target.innerHTML === 'More') {
      setSettings(
        settings.map(item => (item.index === index ? { ...item, open: true } : item))
      );
      e.target.innerHTML = 'Less';
    } else {
      setSettings(
        settings.map(item =>
          item.index === index ? { ...item, open: false } : item
        )
      );
      e.target.innerHTML = 'More';
    }
  };

  return (
    <div id="Search">
      {Object.keys(data).map((title, index) => {
        return (
          <Card
            key={index}
            className={`animated slideInUp faster section ${title}`}
            tabIndex={1}
          >
            <div className="title">
              <span className="text">{title}</span>
              <span className="grow" />
              {/* Show Button to enable collapse */}
              {data[title].length > 4 ? (
                <Button
                  className="btn"
                  onClick={e => handleButtonClick(e, index)}
                  tabIndex={0}
                >
                  More
                </Button>
              ) : null}
            </div>
            <div className="boxlist">
              {/* Always show up to 4 items without collapse */}
              {data[title].slice(0, 4).map((item, i) => {
                return (
                  <div
                    className="box"
                    key={i}
                    tabIndex={1}
                    onClick={() => props.history.push('/label/')}
                  >
                    <img src={item.icon} alt={item.icon} />
                    <span>{item.desc}</span>
                  </div>
                );
              })}
            </div>
            {/* Show rest of items in collapse */}
            <Collapse
              className="boxlist-collapse"
              in={settings.find(item => item.index === index).open}
              unmountOnExit
            >
              {data[title].slice(4).map((item, i) => {
                return (
                  <div
                    className="box-collapse"
                    key={i}
                    tabIndex={1}
                    onClick={() => props.history.push('/label/')}
                  >
                    <img src={item.icon} alt={item.icon} />
                    <span>{item.desc}</span>
                  </div>
                );
              })}
            </Collapse>
          </Card>
        );
      })}
    </div>
  );
};

export default withRouter(Search);
