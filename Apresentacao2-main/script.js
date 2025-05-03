const downloadFiles = {
  downloadPlanning: './arquivos/planning.docx',
  downloadUX: './arquivos/ux.docx',
  downloadWireframes: './arquivos/wireframes.png',
  downloadAlgorithms: './arquivos/algoritmos.png',
  downloadPrototype: './arquivos/TrabalhoIC.zip'

};

Object.keys(downloadFiles).forEach(buttonId => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = downloadFiles[buttonId];
      link.download = downloadFiles[buttonId].split('/').pop(); 
      document.body.appendChild(link); 
      link.click();
      document.body.removeChild(link);
    });
  }
});
