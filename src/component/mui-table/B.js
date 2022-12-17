import React, { useEffect, useState, useRef, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import supabase from "./supabase";
import { withStyles } from "@material-ui/core/styles";
import tableIcons from "./TableIcons.js";
import { useTheme } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import { useQuery } from "react-query";
import { TablePagination } from "@material-ui/core";
import AdvancedFilter from "./AdvancedFilter";
import { Toolbar } from "@material-ui/core";




import { Grid} from "@material-ui/core";

import * as Layout from "./Layout";
import * as Styled from "./styletebiny";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NULL } from "sass";

const useStyles1 = makeStyles({
  root: {
    marginTop: 0,
    justifyContent: "center",
    display: "flex"
  },
  toolbar: {
    backgroundColor: "white"
  },
  caption: {
    color: "orange",
    fontSize: "20px"
  },
  selectIcon: {
    color: "green"
  },
  select: {
    color: "green",
    fontSize: "18px"
  },
  actions: {
    color: "blue",
    fontSize: "15px"
  },
  selectDropdown: { color: "#fff", backgroundColor: "#1b1f38 !important" },
  menuItem: {
    "&:hover": {
      backgroundColor: "#1b1f38 !important"
    }
  }
});

const useStyles = makeStyles({
  root: {
    marginTop: 0,
    justifyContent: "center",
    display: "flex"
  },
  toolbar: {
    backgroundColor: "white",
    "@media (max-width: 780px)": {
      fontSize: "4px",
      
    }
  },
  caption: {
    color: "orange",
    fontSize: "28px",

    "@media (max-width:780px)": {
      color: "green",
      fontSize: "15px"
    }
  },
  selectIcon: {
    color: "green",

    "@media (max-width:780px)": {
      color: "green",
      fontSize: "15px"
    }
  },
  select: {
    color: "green",
    fontSize: "20px",

    "@media (max-width:780px)": {
      color: "green",
      fontSize: "15px"
    }
  },
  actions: {
    color: "blue",

    "@media (max-width:780px)": {
      color: "green",
      fontSize: "15px"
    }
  },
  selectDropdown: { color: "#fff", backgroundColor: "#1b1f38" },
  menuItem: {
    "&:hover": {
      backgroundColor: "#3b3f58"
    }
  },
  colHeader: {
    fontSize: "25px",
    "@media (max-width:500px)": {
   
      fontSize: "15px"
    
    }
  },
  
  "@global tbody tr:nth-child(odd)": {
    backgroundColor: "#B3E5FC",
    borderLeft: `12px solid #0277BD`,
    borderRight: `12px solid #0277BD`, 
  },
  "@global tbody tr:nth-child(even)": {
    backgroundColor: "white",
    borderLeft: `12px solid orange`,
    borderRight: `12px solid orange`
  },

  "@global tbody tr:hover:nth-child(odd)": {
    paddingRight: "7px",
    background: "#81D4FA",
    borderRight: `14px solid 
        #01579B`,
        borderLeft: `14px solid 
            #01579B`
  },
  "@global tbody tr:hover:nth-child(even)": {
    paddingLeft: "7px",
    backgroundColor: "#FFE0B2",
    borderLeft: `14px solid orange`,
    borderRight: `14px solid orange`
  }
  
  

});

const MaterialTableSearchDemo = ({id}) => {
  const theme1 = useTheme();
  const mdUp = useMediaQuery(theme1.breakpoints.up("md"));

 
  const B = [
    {
      Fullname: "ارام حسن مجيد",
      Mothername: "مجيد",
      Shurename: "اسكه محمد"
    },
    {
      Fullname: "له رين كوران احمد",
      Mothername: "احمد",
      Shurename: "حسيبه محمد"
    },
    {
      Fullname: "خيابان حسين كريم",
      Mothername: "الجمور",
      Shurename: "ريزاو محمد رضا"
    }
  ];



  const { data } = useQuery(
    "passport",
    function () {
      return supabase
        .from("aram")
        .select("*");
        
    },
    {
      select: ({ data }) => data
    }
  );

  
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (status === "success") {
      setItems(data);
    }
  }, [status, data]);

 
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Fullname: "",
      Shurename: "",
      Mothername: ""
    }
  );

  


 
  const classes = useStyles();
  const theme = useTheme();

  const handleFilterCountries = (event) => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value });
  };

  const filterCountries = (data) => {
    return data.filter((item) => {
      return (
        item.Fullname.toLowerCase().includes(
          filterInput.Fullname.toLowerCase()
        ) &&
        item.Mothername.toLowerCase().includes(
          filterInput.Mothername.toLowerCase()
        ) &&
        item.Shurename.toLowerCase().includes(
          filterInput.Shurename.toLowerCase()
        )
      );
    });
  };

  const countriesList = filterCountries(items);

  
  
  const columns = [
    {
      title: <h1 className={classes.colHeader}>ناوی سیانی</h1>,
      field: "Fullname",sorting: false,width: null, cellStyle: { width:  mdUp ? "" : 200 }
    },
    {
      title: <h1 className={classes.colHeader}>  لەقەب</h1>,
      field: "Shurename",sorting: false
    },
    {
      title: <h1 className={classes.colHeader}>ناوی دایک </h1>,
      field: "Mothername",sorting: false
    }
  ];

  return status === "success" ? (
    
      
    <div>
    
        
        
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 0 ,paddingRight:70}}>
    
    <Styled.Message>
            هاوڵاتی بەڕێز
            <br />*
            زانیاریەکانی سەر پێناسەکەت لە شوێنی دیاری کراو و بە فۆنتی عەرەبی
            بنووسە .
            <br />*
            زانیاریەکانی سەر پێناسەکەت هاوشێوەی پێناس یان کارتی نیشتیمانیەکەت
            بنووسە .
            <br />*
            لە کاتى سەردانت بۆ وەرگرتنەوەى پاسپۆرتەکەت پێویستە ( کارتى نیشتیمانى
            یان پێناسى بارى شارستانیت) پێبێت .
          </Styled.Message>
         
        </Grid>
      <Grid style={{ paddingBottom: 15 ,
    paddingLeft: 10}}>
        
        <AdvancedFilter
          searchValue={filterInput}
          handleChangeValue={handleFilterCountries}
          onClick={() =>
            setFilterInput({ Fullname: "", Shurename: "", Mothername: "" })
          }
        />
      </Grid>
      
      <MaterialTable
        icons={tableIcons}
        data={countriesList}
        columns={columns}
       
        options={{
          thirdSortClick: false,
          pageSize:10,
          
          padding: 'dense',
          rowStyle: {
          fontSize: 22,
            
          },
          search: false,

          showTitle: false,
          toolbar: false,

          sorting: true,
          headerStyle: {
            backgroundColor: "#154460",
            color: "#FFF",
          fontSize: "24px",
          textAlign: "right",
          fontWeight: "bold",
          padding: "2.5px 0 5px 0"
          
          }
        }}
        localization={{ body:{ emptyDataSourceMessage:<h1 style={{marginTop:'6%',color:"#202037" ,position:'absolute', top:'16%', textAlign:'center'}}>هیچ ناوێک بەو زانیاریانەی بۆی دەگەڕێیت نەدۆزرایەوە</h1> } }}
        components={{
          Pagination: (props) => (
            <TablePagination
              // ActionsComponent={()=><div>hi...</div>}
              //{...props}
              // labelRowsPerPage={<div>{props.labelRowsPerPage}</div>}
              //labelDisplayedRows={row => <div style={{ color:'green' }}>{props.labelDisplayedRows(row)}</div>}
              component="div"
              labelDisplayedRows={({ from, to, count }) =>
                `${to}-${from} لە ${count !== -1 ? count : `أكثر من ${to}}`}`
              }
              labelRowsPerPage="ژمارەی دێڕەکان لە یەک پەڕەیە::"
              
              rowsPerPageOptions={[10, 20, 30]}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                MenuProps: { classes: { paper: classes.selectDropdown } }
              }}
              colSpan={props.colSpan}
              count={props.count}
              rowsPerPage={props.rowsPerPage}
              page={props.page}
              onChangePage={props.onChangePage}
              onChangeRowsPerPage={props.onChangeRowsPerPage}
              classes={{
                root: classes.root,
                toolbar: classes.toolbar,
                caption: classes.caption,
                selectIcon: classes.selectIcon,
                select: classes.select,
                actions: classes.actions,
                menuItem: classes.menuItem
              }}
            />
          )
        }}
      />
      
    
    </div>
 ) : (
  <div>
    
        
        
  <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 0 ,paddingRight:70}}>
  
  <Styled.Message>
          هاوڵاتی بەڕێز
          <br />*
          زانیاریەکانی سەر پێناسەکەت لە شوێنی دیاری کراو و بە فۆنتی عەرەبی
          بنووسە .
          <br />*
          زانیاریەکانی سەر پێناسەکەت هاوشێوەی پێناس یان کارتی نیشتیمانیەکەت
          بنووسە .
          <br />*
          لە کاتى سەردانت بۆ وەرگرتنەوەى پاسپۆرتەکەت پێویستە ( کارتى نیشتیمانى
          یان پێناسى بارى شارستانیت) پێبێت .
        </Styled.Message>
       
      </Grid>
    <Grid style={{ paddingBottom: 15 ,
  paddingLeft: 10}}>
      
      <AdvancedFilter
        searchValue={filterInput}
        handleChangeValue={handleFilterCountries}
        onClick={() =>
          setFilterInput({ Fullname: "", Shurename: "", Mothername: "" })
        }
      />
    </Grid>
    
    <MaterialTable
      icons={tableIcons}
      data={B}
      columns={columns}
     
      options={{
        debounceInterval: 700,
        pageSize:10,
        
        padding: 'dense',
        rowStyle: {
        fontSize: 22,
          
        },
        search: false,
        
        showTitle: false,
        toolbar: false,

        sorting: true,
        headerStyle: {
          backgroundColor: "#154460",
          color: "#FFF",
        fontSize: "24px",
        textAlign: "right",
        fontWeight: "bold"
        
        }
      }}
      localization={{ body:{ emptyDataSourceMessage:<h1 style={{marginTop:'6%',color:"#202037" ,position:'absolute', top:'16%', textAlign:'center'}}>هیچ ناوێک بەو زانیاریانەی بۆی دەگەڕێیت نەدۆزرایەوە</h1> } }}
      components={{
        Pagination: (props) => (
          <TablePagination
            // ActionsComponent={()=><div>hi...</div>}
            //{...props}
            // labelRowsPerPage={<div>{props.labelRowsPerPage}</div>}
            //labelDisplayedRows={row => <div style={{ color:'green' }}>{props.labelDisplayedRows(row)}</div>}
            component="div"
            labelDisplayedRows={({ from, to, count }) =>
              `${to}-${from} لە ${count !== -1 ? count : `أكثر من ${to}}`}`
            }
            labelRowsPerPage="ژمارەی دێڕەکان لە یەک پەڕەیە::"
            
            rowsPerPageOptions={[10, 20, 30]}
            SelectProps={{
              inputProps: { "aria-label": "rows per page" },
              MenuProps: { classes: { paper: classes.selectDropdown } }
            }}
            colSpan={props.colSpan}
            count={props.count}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onChangePage={props.onChangePage}
            onChangeRowsPerPage={props.onChangeRowsPerPage}
            classes={{
              root: classes.root,
              toolbar: classes.toolbar,
              caption: classes.caption,
              selectIcon: classes.selectIcon,
              select: classes.select,
              actions: classes.actions,
              menuItem: classes.menuItem
            }}
          />
        )
      }}
    />
    
  
  </div>
);
};



export default MaterialTableSearchDemo;

