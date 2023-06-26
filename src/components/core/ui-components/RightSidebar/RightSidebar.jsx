import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Avatar, AvatarGroup, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {
  RightSidebar,
  CloseRightSideBarButton,
  RightSideBarInnerContainer,
  RightSideBarContent,
  RadioContainer,
  RadioLabel,
  RadioInput,
  LabelSection,
  PersonalizarContainer,
} from "../../styles/RightSidebar/RightSidebar.styled";
import {
  light,
  dark,
  blue,
} from "../../styles/Theme.styled";


const RightSideBar = ({
  showRightSidebar,
  toggleRightSidebar,
  selectedTheme,
  HandleThemeChange,
  switchColors,
  selectedOption,
}) => {
  

  return (
    <RightSidebar showRightSidebar={showRightSidebar}>
      {showRightSidebar && (
        <>
          <Grid container sx={{display: 'flex', alignItems: 'center', padding:'20px'}}>
          <Grid item xs={10} md={10}>
            <Typography>Personalizar Sistema</Typography>
        </Grid>
        <Grid item xs={2} md={2}>
        <CloseRightSideBarButton onClick={toggleRightSidebar}>
              <CloseIcon></CloseIcon>
            </CloseRightSideBarButton>
        </Grid>
          </Grid>
          <Divider />
          <Grid container sx={{display: 'flex', alignItems: 'center', padding:'20px'}}>
          <FormControl>
          <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={12} md={12}>
                    <Typography>Modo</Typography>
                    <RadioGroup
                            row
                            aria-labelledby="mode"
                            name="mode-group"
                            value={selectedOption}
                            onChange={switchColors}
                        >
                           <FormControlLabel value="claro" control={<Radio sx={{"&.Mui-checked": {
                    color: selectedTheme.colors.headerDark,
                  },}} />} label="Claro" />
                          <FormControlLabel value="escuro" control={<Radio sx={{"&.Mui-checked": {
                    color: selectedTheme.colors.headerDark,
                  },}} />} label="Escuro" />
                        </RadioGroup>
                        <Divider />
                </Grid>
                <Grid item xs={12} md={12} sx={{ padding:'20px'}}>
                    <Typography>Tema</Typography>
                    <AvatarGroup 
                        variant="rounded" 
                        sx={{display: 'flex', justifyContent: 'center'}}
                        >
                        <Avatar sx={{ bgcolor: '#716F70', mr: 2 }}>
                            <Button sx={{width: '100%', height: '100%'}} onClick={() => HandleThemeChange(light)}>
                                {selectedTheme === light ? <CheckIcon sx={{color: 'white'}} /> : ''}
                            </Button>
                        </Avatar>
                        <Avatar sx={{ bgcolor: '#004AAD', mr: 2 }}>
                            <Button sx={{width: '100%', height: '100%'}} onClick={() => HandleThemeChange(dark)}>
                            {selectedTheme === dark ? <CheckIcon sx={{color: 'white'}} /> : ''}
                            </Button>
                        </Avatar>
                        <Avatar sx={{ bgcolor: '#FD6809', mr: 2 }}>
                            <Button sx={{width: '100%', height: '100%'}} onClick={() => HandleThemeChange(blue)}>
                            {selectedTheme === blue ? <CheckIcon sx={{color: 'white'}} /> : ''}
                            </Button>
                        </Avatar>
                    </AvatarGroup>
                </Grid>
            </Grid>
          </FormControl>
          <Divider />
          </Grid>
        </>
        
      )}
    </RightSidebar>
  );
};
export default RightSideBar;
