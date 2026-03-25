export class Page {
    private title: string;
    private content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setContent(content: string): void {
        this.content = content;
    }

    render(): string {
        return `<div class="page">
            <h1>${this.title}</h1>
            <div class="content">${this.content}</div>
        </div>`;
    }
}