import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {
  Avatar,
  AvatarGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
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
import { light, dark, blue } from "../../styles/Theme.styled";
import { setOrientation } from "../../../../store/features/SideBarControl";

const RightSideBar = ({
  showRightSidebar,
  toggleRightSidebar,
  selectedTheme,
  HandleThemeChange,
  switchColors,
  selectedOption,
}) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = React.useState("vertical");
  const [bar, setBar] = React.useState("fixed");
  const sidebarControl = useSelector(
    (state) => state.sidebarControl.orientation
  );
  useEffect(() => {
    setMenu(sidebarControl);
  }, [sidebarControl]);
  const handleChangeMenu = (event) => {
    setMenu(event.target.value);
    dispatch(setOrientation(event.target.value));

    // console.log(event.target.value)
  };
  const handleChangeBar = (event) => {
    setBar(event.target.value);
    // dispatch(setOrientation(event.target.value))

    console.log(event.target.value);
  };

  return (
    <RightSidebar showRightSidebar={showRightSidebar}>
      {showRightSidebar && (
        <>
          {/* Personalizar Sistema */}
          <Grid
            container
            sx={{ display: "flex", alignItems: "center", padding: "20px" }}
          >
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
          {/* MODO */}
          <Grid
            container
            sx={{ display: "flex", alignItems: "center", padding: "20px" }}
          >
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={12}>
                <Typography>Modo</Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="mode"
                    name="mode-group"
                    value={selectedOption}
                    onChange={switchColors}
                  >
                    <FormControlLabel
                      value="claro"
                      disabled={selectedTheme.name !== "light-theme"}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: selectedTheme.colors.headerDark,
                            },
                          }}
                        />
                      }
                      label={
                        <span
                          style={{ color: selectedTheme.colors.headerDark }}
                        >
                          Claro
                        </span>
                      }
                    />
                    <FormControlLabel
                      value="escuro"
                      disabled={selectedTheme.name !== "light-theme"}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: selectedTheme.colors.headerDark,
                            },
                          }}
                        />
                      }
                      label={
                        <span
                          style={{ color: selectedTheme.colors.headerDark }}
                        >
                          Escuro
                        </span>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          {/* TEMA */}
          <Grid
            container
            sx={{ display: "flex", alignItems: "center", padding: "20px" }}
          >
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={12}>
                <Typography>Tema</Typography>
                <AvatarGroup
                  variant="rounded"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Avatar sx={{ bgcolor: "#716F70", mr: 2 }}>
                    <Button
                      sx={{ width: "100%", height: "100%" }}
                      onClick={() => HandleThemeChange(light)}
                    >
                      {selectedTheme === light ? (
                        <CheckIcon sx={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                    </Button>
                  </Avatar>
                  <Avatar sx={{ bgcolor: "#004AAD", mr: 2 }}>
                    <Button
                      sx={{ width: "100%", height: "100%" }}
                      onClick={() => HandleThemeChange(dark)}
                    >
                      {selectedTheme === dark ? (
                        <CheckIcon sx={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                    </Button>
                  </Avatar>
                  <Avatar sx={{ bgcolor: "#FD6809", mr: 2 }}>
                    <Button
                      sx={{ width: "100%", height: "100%" }}
                      onClick={() => HandleThemeChange(blue)}
                    >
                      {selectedTheme === blue ? (
                        <CheckIcon sx={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                    </Button>
                  </Avatar>
                </AvatarGroup>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          {/* MENU */}
          <Grid
            container
            sx={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <Grid item xs={12} md={12}>
              <Typography>Menu</Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="menu"
                  name="menu-group"
                  value={menu}
                  onChange={handleChangeMenu}
                >
                  <FormControlLabel
                    value="vertical"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: selectedTheme.colors.headerDark,
                          },
                        }}
                      />
                    }
                    label="Vertical"
                  />
                  <FormControlLabel
                    value="horizontal"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: selectedTheme.colors.headerDark,
                          },
                        }}
                      />
                    }
                    label="Horizontal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Divider />
          {/* BARRA DE NAVEGAÇÃO */}
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography>Barra de Navegação</Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="bar"
                  name="bar-group"
                  value={bar}
                  onChange={handleChangeBar}
                >
                  <FormControlLabel
                    value="estatic"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: selectedTheme.colors.headerDark,
                          },
                        }}
                      />
                    }
                    label="Estático"
                  />
                  <FormControlLabel
                    value="fixed"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: selectedTheme.colors.headerDark,
                          },
                        }}
                      />
                    }
                    label="Fixa"
                  />
                  <FormControlLabel
                    value="hide"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: selectedTheme.colors.headerDark,
                          },
                        }}
                      />
                    }
                    label="Esconder"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Divider />
        </>
      )}
    </RightSidebar>
  );
};
export default RightSideBar;
