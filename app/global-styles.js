import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin:0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: Georgia, Times, 'Times New Roman', serif;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#dddddd+0,ffffff+50,dddddd+100 */
    background: rgb(221,221,221); /* Old browsers */
    background: -moz-linear-gradient(left, rgba(221,221,221,1) 0%, rgba(255,255,255,1) 50%, rgba(221,221,221,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(221,221,221,1) 0%,rgba(255,255,255,1) 50%,rgba(221,221,221,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(221,221,221,1) 0%,rgba(255,255,255,1) 50%,rgba(221,221,221,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dddddd', endColorstr='#dddddd',GradientType=1 ); /* IE6-9 */
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    margin:0;
    padding: 0;
    height: 100%;
    padding-bottom: 20px;

  }
  .app_container {
    min-height:100%;
    min-width:100%;
    padding:0;
    margin:0;
  }

  .header {
    max-width: 700px;
    margin: auto;
    padding: 10px;
  }

  .body_wrap{
    max-width: 1300px;
    margin:auto;
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 0px; ${''/* Padding for top of footer */}
    padding-bottom: 12em; ${''/* Height of footer plus some room */}
  }

  .footer{
    bottom: 0px;  ${''/* Padding for top of footer */}
    width: 100%;
    margin-top:10px;
    display:flex;
    -webkit-display:flex;
    align-items:center;
    justify-content:center;
    height: 4em;
    position:fixed;
    background: #222;
    color: white;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
