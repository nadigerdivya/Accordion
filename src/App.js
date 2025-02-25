import "./styles.css";
import Accordion from "./Accordion";

export default function App() {
  const accordions = [
    {
      id: 1,
      header: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
    },
    {
      id: 2,
      header: "CSS",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 3,
      header: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  const isMultiSelect = false;
  const isDefaultOpen = true;

  return (
    <div id="app">
      <Accordion
        accordions={accordions}
        isMultiSelect={isMultiSelect}
        isDefaultOpen={isDefaultOpen}
      />
    </div>
  );
}
