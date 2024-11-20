import Script from "next/script";

interface UpvotyProps {
  projectId: string;
  lang?: string;
}

const Upvoty: React.FC<UpvotyProps> = ({ projectId, lang }) => {
  if (!projectId) {
    console.error("No projectId was passed to Upvoty Next, widget will not be initialized");
    return null;
  }

  return (
    <Script
      src={`https://app.upvoty.com/embed.js?id=${projectId}`}
      strategy="afterInteractive"
      lang={lang}
    />
  );
};

export default Upvoty;
