import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import svgTabs from '../../assets/svg/guitar-tabs.svg';
import svgGuitar from '../../assets/svg/guitar.svg';
import svgSheets from '../../assets/svg/music-note.svg';
import TabPanel from './TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#222022'
  }
}));

const AllTabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const a11yProps = index => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`
    };
  };

  return (
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        style={{ height: '100%', width: '100%' }}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h1>Tab 1</h1>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h1>Tab 2</h1>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h1>Tab 3</h1>
        </TabPanel>
      </SwipeableViews>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant={window.innerWidth > 960 ? 'standard' : 'fullWidth'}
          centered={window.innerWidth > 960 ? true : false}
          aria-label="full width tabs example"
          id="Tabs"
          TabIndicatorProps={{
            style: {
              top: 0,
              background: '#dc7d09'
            }
          }}
        >
          <Tab
            style={{
              color: '#fff'
            }}
            icon={<img src={svgTabs} alt="icon" style={{ width: '30px' }} />}
            label="Tabs"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: '#fff'
            }}
            icon={<img src={svgGuitar} alt="icon" style={{ width: '30px' }} />}
            {...a11yProps(1)}
            label="Guitar"
          />
          <Tab
            style={{
              color: '#fff'
            }}
            icon={<img src={svgSheets} alt="icon" style={{ width: '30px' }} />}
            label="Sheets"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default AllTabs;
