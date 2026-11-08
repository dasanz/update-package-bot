import { ContextCollector } from './ContextCollector';

const contextCollector = new ContextCollector();
const context = contextCollector.getCollection();
console.log(context);
