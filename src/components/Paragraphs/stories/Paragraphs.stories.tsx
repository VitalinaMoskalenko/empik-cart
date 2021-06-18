import { Body, SmallBody } from "../";

export default { title: "Paragraphs" };

export const withBody = () => <Body>Paragraph Body</Body>;

export const withSmallBody = () => <SmallBody>Paragraph SmallBody</SmallBody>;
