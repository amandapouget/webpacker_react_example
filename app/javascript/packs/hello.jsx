import Hello from 'components/hello';
import WebpackerReact from 'webpacker-react';

WebpackerReact.setup({Hello});
// {Hello} is short for {Hello: Hello}
// can pass multiple components here: {Hello, Goodbye}
// you're just registering them for react_component('foo')
