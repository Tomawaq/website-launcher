import { Controller } from '@hotwired/stimulus';
import '../styles/desktop.scss';

export default class extends Controller {
    connect() {
        console.log('desktop #connect')
    }
}
