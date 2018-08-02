import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
      <sprk-stack itemSpacing="medium" *ngIf="topLinks">
        <div sprk-stack-item additionalClasses="sprk-o-Stack__item--equal@m">
          <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
            One
          </h2>

          <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
            <li
              *ngFor="let topLink of topLinks"
              sprk-stack-item>
              <a
                class="sprk-b-Link sprk-b-Link--standalone"
                [routerLink]="topLink.href"
                [attr.data-analytics]="topLink.analytics">
                {{ topLink.text }}
              </a>
            </li>
          </ul>
        </div>
      </sprk-stack>

      <sprk-stack splitAt="{{ splitAt }}" itemSpacing="large">
        <div sprk-stack-item additionalClasses="sprk-o-Stack__item--equal@xl sprk-o-Stack sprk-o-Stack--large">
          <ul
            *ngIf="socialLinks"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@xs sprk-b-List sprk-b-List--bare">
            <li
              *ngFor="let socialLink of socialLinks"
              sprk-stack-item>
              <a
                class="sprk-b-Link--muted"
                [routerLink]="socialLink.href"
                [attr.data-analytics]="socialLink.analytics">
                <sprk-icon [iconType]="socialLink.icon" additionalClasses="sprk-c-Icon--l"></sprk-icon>
              </a>
            </li>
          </ul>

          <ul
            *ngIf="feedbackLinks"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-b-List sprk-b-List--bare">
            <li
              *ngFor="let feedbackLink of feedbackLinks"
              class="sprk-o-Stack__item">
              <a
                class="sprk-b-Link sprk-b-Link--muted"
                [routerLink]="feedbackLink.feedbackHref"
                [attr.data-analytics]="feedbackLink.analytics">
                <sprk-icon [iconType]="feedbackLink.icon" additionalClasses="sprk-c-Icon--l sprk-u-mrs"></sprk-icon>
                {{ feedbackLink.text }}
              </a>
            </li>
          </ul>

          <sprk-toggle
            *ngIf="disclaimer"
            sprk-stack-item
            toggleType="base"
            title="{{ disclaimerTitle }}"
            body="{{ disclaimerCopy }}"
            analyticsString="{{ analyticsStringDisclaimer }}">
          </sprk-toggle>

          <p sprk-stack-item class="sprk-b-TypeBodyTwo">
            <ng-content></ng-content>
          </p>

          <div sprk-stack-item additionalClasses="sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
            <div *ngFor="let img of imgs" [ngClass]="getClassesImgs()">
              <a [routerLink]="img.href" [attr.data-analytics]="img.analytics">
                <img src="{{ img.src }}" alt="{{ img.alt }}">
              </a>
            </div>
          </div>

          <sprk-secondary-navigation sprk-stack-item>
            <sprk-secondary-navigation-item
              *ngFor="let link of bottomLinks"
              [analyticsString]="link.analytics"
              [href]="link.href"
              [text]="link.text">
            </sprk-secondary-navigation-item>
          </sprk-secondary-navigation>
        </div>

        <sprk-award
          *ngIf="award === 'true'"
          sprk-stack-item
          disclaimer="false"
          title="Spark Award Component"
          additionalClassesImgOne="{{ additionalClassesAwardImgOne }}"
          additionalClassesImgTwo="{{ additionalClassesAwardImgTwo }}"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
      </sprk-stack>
    </footer>
  `,
  styles: ['']
})

export class SparkFooterComponent {
  @Input() award: string;
  @Input() splitAt: string;
  @Input() imgAnalytics: string;
  @Input() linkAnalytics: string;
  @Input() additionalClasses: string;
  @Input() imgs: Object;
  @Input() topLinks: Object;
  @Input() bottomLinks: Object;
  @Input() socialLinks: Object;
  @Input() feedbackLinks: Object;
  @Input() additionalClassesBaseImgs: string;
  @Input() additionalClassesAwardImgOne: string;
  @Input() additionalClassesAwardImgTwo: string;
  @Input() disclaimer: string;
  @Input() disclaimerTitle: string;
  @Input() disclaimerCopy: string;
  @Input() analyticsStringDisclaimer: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-o-Box',
      'sprk-o-Stack',
      'sprk-o-Stack--large',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  getClassesImgs(): string {
    let classArray: Array<String> = [
      'sprk-o-Stack__item'
    ];

    if (this.additionalClassesBaseImgs) {
      this.additionalClassesBaseImgs.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
