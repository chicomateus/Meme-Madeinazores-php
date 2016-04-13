var MEME_SETTINGS = {
  creditText: 'Créditos:', // Default "credits" text.
  creditSize: 12, // Font size for credit text.
  downloadName: 'SocialImage', // The name of the downloaded image file (will have a ".png" extension added).
  fontColor: 'white', // Universal font color.

  // Universal font family for texts:
  // Note that you'll need to included quoted font names as you would in CSS, ie: '"Knockout 28 B"'.
  fontFamily: 'Arial',
  // Font family options: set to empty array to disable font selector.
  // These options may also be formatted as {text:'Knockout', value:'"Knockout 28 B"'}.
  fontFamilyOpts: [{text:'Proxima Nova', value:'proxima_nova_rgregular'},'Open Sans', 'Lato' ,'Arial', 'Helvetica Neue'],
  
  // Font size of main headline:
  fontSize: 24,
  // Font size options: set to empty array to disable font-size selector.
  // fontSizeOpts: [
  //   {text: 'Small text', value: 14},
  //   {text: 'Medium text', value: 24},
  //   {text: 'Large text', value: 36}
  // ],

  headlineText: '_Escrever_ o *headline*', // Default headline text.
  height: 378, // Canvas rendering height.
  imageScale: 1, // Background image scale.
  imageSrc: '', // Default background image path. MUST reside on host domain, or use base64 data.
  overlayAlpha: 0.5, // Opacity of image overlay.

  // Image overlay color, or blank ('') for no overlay:
  overlayColor: '#000',
  // Overlay color options: set to empty array to disable overlay options selector.
  overlayColorOpts: ["#000",
    "#777",
    "#C52126",
    "#DEB827",
    "#D4AB4C",
    "#004C54",
    "#054087",
    "#343F38"],
  paddingRatio: 0.09, // Percentage of canvas width to use as edge padding.
  
  // Text alignment: valid settings are "left", "center", and "right".
  textAlign: 'left',
  // Text alignment options: set to empty array to disable alignment picker.
  textAlignOpts: [
    {text: 'Align left', value: 'left'}, 
    {text: 'Align center', value: 'center'},
    {text: 'Align right', value: 'right'}
  ],

  textShadow: false, // Text shadow toggle.
  textShadowEdit: true, // Toggles text shadow control within the editor.
  watermarkAlpha: 1, // Opacity of watermark image.
  watermarkMaxWidthRatio: 0.20, // Maximum allowed width of watermark (percentage of total canvas width).

  // Path to the watermark image source, or blank for no watermark:
  // Alternatively, use '<%= asset_data_uri("vox.png") %>' to populate the watermark with base64 data, avoiding Cross-Origin issues.
  watermarkSrc: (localStorage && localStorage.getItem('meme_watermark')) || '<%= image_path("vox.png") %>',
  
  // Watermark image options: set to empty array to disable watermark picker.
  // NOTE: only populate the "data" attributes with base64 data when concerned about Cross-Origin requests...
  // Otherwise, just leave "data" attributes blank and allow images to load from your server.
  watermarkOpts: [
    {text: 'FolkAzores_h100', value: 'images/folkazores_H100.png', data: ''},
    {text: 'FolkAzores_h80', value: 'images/folkazores_H80.png', data: ''},
    //{text: 'MadeinAzores White', value: 'images/madeinazoresWhite.png', data: ''},
    //{text: 'MadeinAzores', value: 'images/madeinazores.png', data: ''}
  ],

  width: 755 // Canvas rendering width.
};