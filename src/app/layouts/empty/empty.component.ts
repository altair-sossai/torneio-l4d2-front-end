import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-empty-root',
    templateUrl: './empty.component.html',
    styleUrls: ['./empty.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EmptyComponent {
}
