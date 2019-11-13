import React from 'react';
import { Typography, Grid} from '@material-ui/core';

import { Theme } from '@highpoint/ui-elements';

/* Icons */
import AccountBox from '@highpoint/ui-elements/dist/es/icons/AccountBox';
import Add from '@highpoint/ui-elements/dist/es/icons/Add';
import AddToCompare from '@highpoint/ui-elements/dist/es/icons/AddToCompare';
import AddToCompareFilled from '@highpoint/ui-elements/dist/es/icons/AddToCompareFilled';
import ArrowBack from '@highpoint/ui-elements/dist/es/icons/ArrowBack';
import Bike from '@highpoint/ui-elements/dist/es/icons/Bike';
import Calendar from '@highpoint/ui-elements/dist/es/icons/Calendar';
import Cap from '@highpoint/ui-elements/dist/es/icons/Cap';
import Car from '@highpoint/ui-elements/dist/es/icons/Car';
import Cart from '@highpoint/ui-elements/dist/es/icons/Cart';
import CheckMark from '@highpoint/ui-elements/dist/es/icons/CheckMark';
import ChevronDown from '@highpoint/ui-elements/dist/es/icons/ChevronDown';
import ChevronLeft from '@highpoint/ui-elements/dist/es/icons/ChevronLeft';
import ChevronRight from '@highpoint/ui-elements/dist/es/icons/ChevronRight';
import ChevronUp from '@highpoint/ui-elements/dist/es/icons/ChevronUp';
import ClassLocation from '@highpoint/ui-elements/dist/es/icons/ClassLocation';
import Clock from '@highpoint/ui-elements/dist/es/icons/Clock';
import Close from '@highpoint/ui-elements/dist/es/icons/Close';
import ClosedClass from '@highpoint/ui-elements/dist/es/icons/ClosedClass';
import CombinedClass from '@highpoint/ui-elements/dist/es/icons/CombinedClass';
import Course from '@highpoint/ui-elements/dist/es/icons/Course';
import Date from '@highpoint/ui-elements/dist/es/icons/Date';
import Delete from '@highpoint/ui-elements/dist/es/icons/Delete';
import Directions from '@highpoint/ui-elements/dist/es/icons/Directions';
import DotsMenu from '@highpoint/ui-elements/dist/es/icons/DotsMenu';
import Email from '@highpoint/ui-elements/dist/es/icons/Email';
import Enrolled from '@highpoint/ui-elements/dist/es/icons/Enrolled';
import Envelope from '@highpoint/ui-elements/dist/es/icons/Envelope';
import Facebook from '@highpoint/ui-elements/dist/es/icons/Facebook';
import Fail from '@highpoint/ui-elements/dist/es/icons/Fail';
import Favorite from '@highpoint/ui-elements/dist/es/icons/Favorite';
import FavoriteFilled from '@highpoint/ui-elements/dist/es/icons/FavoriteFilled';
import First from '@highpoint/ui-elements/dist/es/icons/First';
import Friends from '@highpoint/ui-elements/dist/es/icons/Friends';
import Gear from '@highpoint/ui-elements/dist/es/icons/Gear';
import GooglePlus from '@highpoint/ui-elements/dist/es/icons/GooglePlus';
import Home from '@highpoint/ui-elements/dist/es/icons/Home';
import Info from '@highpoint/ui-elements/dist/es/icons/Info';
import Left from '@highpoint/ui-elements/dist/es/icons/Left';
import Link from '@highpoint/ui-elements/dist/es/icons/Link';
import List from '@highpoint/ui-elements/dist/es/icons/List';
import Location from '@highpoint/ui-elements/dist/es/icons/Location';
import Menu from '@highpoint/ui-elements/dist/es/icons/Menu';
import Multiple from '@highpoint/ui-elements/dist/es/icons/Multiple';
import Note from '@highpoint/ui-elements/dist/es/icons/Note';
import Pedestrian from '@highpoint/ui-elements/dist/es/icons/Pedestrian';
import Phone from '@highpoint/ui-elements/dist/es/icons/Phone';
import PinConfirmed from '@highpoint/ui-elements/dist/es/icons/PinConfirmed';
import Pinned from '@highpoint/ui-elements/dist/es/icons/Pinned';
import Planner from '@highpoint/ui-elements/dist/es/icons/Planner';
import PlayListAddCheck from '@highpoint/ui-elements/dist/es/icons/PlayListAddCheck';
import Print from '@highpoint/ui-elements/dist/es/icons/Print';
import Right from '@highpoint/ui-elements/dist/es/icons/Right';
import RoundedSquare from '@highpoint/ui-elements/dist/es/icons/RoundedSquare';
import Search from '@highpoint/ui-elements/dist/es/icons/Search';
import Settings from '@highpoint/ui-elements/dist/es/icons/Settings';
import SmallClassLocation from '@highpoint/ui-elements/dist/es/icons/SmallClassLocation';
import SmallDotsMenu from '@highpoint/ui-elements/dist/es/icons/SmallDotsMenu';
import SmallTime from '@highpoint/ui-elements/dist/es/icons/SmallTime';
import Sort from '@highpoint/ui-elements/dist/es/icons/Sort';
import Straight from '@highpoint/ui-elements/dist/es/icons/Straight';
import Success from '@highpoint/ui-elements/dist/es/icons/Success';
import Train from '@highpoint/ui-elements/dist/es/icons/Train';
import Transferred from '@highpoint/ui-elements/dist/es/icons/Transferred';
import Tumblr from '@highpoint/ui-elements/dist/es/icons/Tumblr';
import Warning from '@highpoint/ui-elements/dist/es/icons/Warning';
import ZCCM from '@highpoint/ui-elements/dist/es/icons/ZCCM';

export default {
  component: Add,
  title: 'Components|ui-elements/Icons',
};

const icon = (icon, name) => (
    <Grid
      item
      style={{
        minWidth: '150px',
        maxWidth: '200px',
        minHeight: '80px',
        border: '1px solid rgba(117, 127, 169, 0.5)',
        flexGrow: '1',
        flexShrink: '1',
        flexBasis: 'auto'
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        alignContent="center"
        style={{ height: '100%' }}
      >
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography variant="body1">{name}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );

export const icons = () => (
    <Theme.Provider>
    <Grid container spacing={1} style={{width: '100%'}}>
    {icon(<AccountBox />, 'AccountBox')}
    {icon(<Add />, 'Add')}
    {icon(<AddToCompare />, 'AddToCompare')}
    {icon(<AddToCompareFilled />, 'AddToCompareFilled')}
    {icon(<ArrowBack />, 'ArrowBack')}
    {icon(<Bike />, 'Bike')}
    {icon(<Calendar />, 'Calendar')}
    {icon(<Cap />, 'Cap')}
    {icon(<Car />, 'Car')}
    {icon(<Cart />, 'Cart')}
    {icon(<CheckMark />, 'CheckMark')}
    {icon(<ChevronDown />, 'ChevronDown')}
    {icon(<ChevronLeft />, 'ChevronLeft')}
    {icon(<ChevronRight />, 'ChevronRight')}
    {icon(<ChevronUp />, 'ChevronUp')}
    {icon(<ClassLocation />, 'ClassLocation')}
    {icon(<Clock />, 'Clock')}
    {icon(<Close />, 'Close')}
    {icon(<ClosedClass />, 'ClosedClass')}
    {icon(<CombinedClass />, 'CombinedClass')}
    {icon(<Course />, 'Course')}
    {icon(<Date />, 'Date')}
    {icon(<Delete />, 'Delete')}
    {icon(<Directions />, 'Directions')}
    {icon(<DotsMenu />, 'DotsMenu')}
    {icon(<Email />, 'Email')}
    {icon(<Enrolled />, 'Enrolled')}
    {icon(<Envelope />, 'Envelope')}
    {icon(<Facebook />, 'Facebook')}
    {icon(<Fail />, 'Fail')}
    {icon(<Favorite />, 'Favorite')}
    {icon(<FavoriteFilled />, 'FavoriteFilled')}
    {icon(<First />, 'First')}
    {icon(<Friends />, 'Friends')}
    {icon(<Gear />, 'Gear')}
    {icon(<GooglePlus />, 'GooglePlus')}
    {icon(<Home />, 'Home')}
    {icon(<Info />, 'Info')}
    {icon(<Left />, 'Left')}
    {icon(<Link />, 'Link')}
    {icon(<List />, 'List')}
    {icon(<Location />, 'Location')}
    {icon(<Menu />, 'Menu')}
    {icon(<Multiple />, 'Multiple')}
    {icon(<Note />, 'Note')}
    {icon(<Pedestrian />, 'Pedestrian')}
    {icon(<Phone />, 'Phone')}
    {icon(<PinConfirmed />, 'PinConfirmed')}
    {icon(<Pinned />, 'Pinned')}
    {icon(<Planner />, 'Planner')}
    {icon(<PlayListAddCheck />, 'PlayListAddCheck')}
    {icon(<Print />, 'Print')}
    {icon(<Right />, 'Right')}
    {icon(<RoundedSquare />, 'RoundedSquare')}
    {icon(<Search />, 'Search')}
    {icon(<Settings />, 'Settings')}
    {icon(<SmallClassLocation />, 'SmallClassLocation')}
    {icon(<SmallDotsMenu />, 'SmallDotsMenu')}
    {icon(<SmallTime />, 'SmallTime')}
    {icon(<Sort />, 'Sort')}
    {icon(<Straight />, 'Straight')}
    {icon(<Success />, 'Success')}
    {icon(<Train />, 'Train')}
    {icon(<Transferred />, 'Transferred')}
    {icon(<Tumblr />, 'Tumblr')}
    {icon(<Warning />, 'Warning')}
    {icon(<ZCCM fontSize="large" />, 'ZCCM')}
  </Grid>
  </Theme.Provider>
);