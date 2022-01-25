import 'react-hot-loader';
import React from 'react'
import { render } from 'react-dom'
import { hydrate } from 'react-dom'
import HelloWorld from './HelloWorld'
import App from './App'

hydrate (<App/>, document.getElementById('root'))
