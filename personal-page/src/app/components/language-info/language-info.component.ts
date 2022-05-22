import { Component, Input } from "@angular/core";

@Component({
    selector: 'language-info',
    templateUrl: 'language-info.component.html',
    styleUrls: ['language-info.component.sass']
})
export class LanguageInfoComponent {

    @Input('language')
    public language: string|undefined

    private languageColors: Map<string, string> = new Map<string, string>([
        ['Java','#FF9900'],
        ['PHP' ,'blue'],
        ['Dart','gray'],
        ['HTML', 'red'],
        ['Default', 'red']
    ])

    public getBackgroundColor() {
        return `background-color: ${this.languageColors.get(this.language ?? 'Default')}`
    }
}