import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };
    const reverseSentence = () => {
        const reversed = markdown.split(' ').reverse().join(' ');
        const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
        setMarkdown(capitalized);
    };
const data = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 },
];

const names = data.map(item => item.name);
console.log(names); // ['John', 'Jane', 'Doe']
    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;