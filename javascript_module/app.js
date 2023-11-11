import {firstName as fname} from  './utils/firstname.js'
import age  from './utils/age.js'
import { Person } from './utils/person.js'

console.log(fname,age)
const person = new Person('John', 'Doe', 22)
console.log(person);
console.log(typeof person)
person.info()