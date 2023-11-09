
import React from 'react';
import '../css/emaillist.css';
import { Checkbox, IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material//Refresh';
import MoreVertIcon from '@mui/icons-material//MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleOption, ticked, unticked } from '../features/counter/selectoptionsSlice';
import { selectOption } from '../features/counter/selectoptionsSlice';

function EmailListSetting() {
    const dispatch= useDispatch();
    const isticked=useSelector(selectOption);
    const issingleticked=useSelector(selectSingleOption);

    function handletick() {
        if(isticked && !issingleticked) {
            dispatch(unticked());
            console.log('isunticked',isticked);
        }
        else if(!isticked && issingleticked) {
            dispatch(unticked());
            console.log('isticked',isticked);
        }
        else {
            dispatch(ticked());
        }
    };
  return (
    <div className='emaillist__settings'>
        <div className='emaillist__settingsLeft'>
            <IconButton onClick={handletick}>
                    {/* {isticked ? (
                <CheckBoxIcon onClick={handletick} />
                ) : (
                <CheckBoxOutlineBlankIcon onClick={handletick} />
                )} */}
                {/* <CheckBoxOutlineBlankIcon /> */}
                { !isticked && issingleticked && (<IndeterminateCheckBoxIcon onClick={handletick}  />)}
                { isticked && (<CheckBoxIcon onClick={handletick} />)}
                { !isticked && !issingleticked && (<CheckBoxOutlineBlankIcon onClick={handletick}  />)}
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>

        </div>
        <div className='emaillist__settingsRight'>
            <p>1-50 of 1,432</p>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default EmailListSetting