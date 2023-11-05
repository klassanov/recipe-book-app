import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent{

    @Output() menuItemClickedEvent = new EventEmitter<string>();

    public menuItemClicked(linkName: string): void{
        this.menuItemClickedEvent.emit(linkName);
    }
}