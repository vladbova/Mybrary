document.addEventListener('DOMContentLoaded', function() {
  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(FilePondPluginImageResize);
  FilePond.registerPlugin(FilePondPluginFileEncode);
  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);

  const rootStyles = window.getComputedStyle(document.documentElement);
  const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'));
  const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'));
  const coverHeight = coverWidth / coverAspectRatio;

  FilePond.setOptions({
    stylePanelAspectRatio: 1 / coverAspectRatio,
    imageResizeTargetWidth: coverWidth,
    imageResizeTargetHeight: coverHeight
  })
  FilePond.parse(document.body);
});  