import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]',
})
export class StructuralDirectiveDirective {
  @Input() set appStructuralDirective(condition: boolean) {
    if (!condition) {
      console.log('this.templateRef:', this.templateRef);
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
