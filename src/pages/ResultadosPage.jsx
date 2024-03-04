import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import Consumos from "../components/Consumos";
import Climatizacion from "../components/Climatizacion";
import Constructivas from "../components/Constructivas";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ResultadosPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isSmallScreen = useMediaQuery("(max-width:980px)");

  return (
    <div className=" flex-grow w-full" style={{ backgroundColor: "#F2F2F2" }}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            sx={{
              "& .MuiTabs-flexContainer": {
                flexDirection: isSmallScreen ? "column" : "row", // Stack tabs vertically
                alignItems: isSmallScreen ? "center" : "flex-start", // Center align tabs horizontally for small screens
                width: "100%", // Occupy full width of the container
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Instalación fotovoltaica" {...a11yProps(0)} />
            <Tab label="Consumos electricos" {...a11yProps(1)} />
            <Tab label="Instalaciones de climatización" {...a11yProps(2)} />
            <Tab label="Mejoras Constructivas" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/fotovoltaica.png" alt="" />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Consumos/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <Climatizacion/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
         <Constructivas/>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
