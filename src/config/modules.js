import { javaSyllabus } from '../data/javaSyllabus';
import { javaContent } from '../data/javaContent';

export const modules = [
  {
    slug: 'java',
    label: 'Java Mastery',
    title: 'Java Preparation Module',
    description: 'Complete syllabus for cracking Java-based interviews.',
    syllabus: javaSyllabus,
    content: javaContent,
  },
];

export function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}
