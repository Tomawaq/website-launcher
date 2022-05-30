import { Controller } from '@hotwired/stimulus';
import '../styles/navigation.scss';

export default class extends Controller {
    connect() {
        console.log('navigation #connect');
    }
}
