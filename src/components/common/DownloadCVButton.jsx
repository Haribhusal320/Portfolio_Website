import CV from "../../assets/documents/Hari_Bhusal_Resume.pdf";

function DownloadCVButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Hari_Bhusal_Resume.pdf";
    link.click();
  };

  return (
    <button
      className="px-4 py-2 mt-2 font-semibold rounded-full text-black bg-white border border-black hover:text-white hover:bg-black transition-all duration-300 ease-in-out hover:scale-110"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
}

export default DownloadCVButton;
