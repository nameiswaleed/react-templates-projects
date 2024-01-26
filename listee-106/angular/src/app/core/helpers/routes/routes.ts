import { BehaviorSubject } from 'rxjs';
export class routes {
  static navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  public static layoutDirection: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public static Url: string = '';
  static rtl = this.layoutDirection.subscribe((res: any) => {
    if (res == 'rtl') this.Url = res;
  });
  public static get baseUrl(): string {
    return routes.Url;
  }
  public static get blog(): string {
    return this.baseUrl + '/blog';
  }
  public static get contact(): string {
    return this.baseUrl + '/contact';
  }
  public static get home(): string {
    return this.baseUrl + '/home';
  }
  public static get listings(): string {
    return this.baseUrl + '/listings';
  }

  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get userpages(): string {
    return this.baseUrl + '/userpages';
  }
  public static get blogdetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get bloggrid(): string {
    return this.baseUrl + '/blog/blog-grid';
  }
  public static get bloggridsidebar(): string {
    return this.baseUrl + '/blog/blog-grid-sidebar';
  }
  public static get bloglist(): string {
    return this.baseUrl + '/blog/blog-list';
  }
  public static get bloglistsidebar(): string {
    return this.baseUrl + '/blog/blog-list-sidebar';
  }
  public static get home1(): string {
    return this.baseUrl + '/home-one';
  }
  public static get home2(): string {
    return this.baseUrl + '/home-two';
  }
  public static get home3(): string {
    return this.baseUrl + '/home-three';
  }
  public static get home4(): string {
    return this.baseUrl + '/home-four';
  }
  public static get home5(): string {
    return this.baseUrl + '/home-five';
  }
  public static get home6(): string {
    return this.baseUrl + '/home-six';
  }
  public static get home7(): string {
    return this.baseUrl + '/home-seven';
  }
  public static get home8(): string {
    return this.baseUrl + '/home-eight';
  }
  public static get home9(): string {
    return this.baseUrl + '/home-nine';
  }
  public static get listinggrid(): string {
    return this.baseUrl + '/listings/listing-grid';
  }
  public static get listinggridsidebar(): string {
    return this.baseUrl + '/listings/listing-grid-sidebar';
  }
  public static get listinglistsidebar(): string {
    return this.baseUrl + '/listings/listing-list-sidebar';
  }
  public static get listingmapgrid(): string {
    return this.baseUrl + '/listings/listingmap-grid';
  }
  public static get listingmaplist(): string {
    return this.baseUrl + '/listings/listingmap-list';
  }
  public static get about(): string {
    return this.baseUrl + '/pages/about';
  }
  public static get categories(): string {
    return this.baseUrl + '/pages/categories';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }
  public static get gallery(): string {
    return this.baseUrl + '/pages/gallery';
  }
  public static get howitworks(): string {
    return this.baseUrl + '/pages/howitworks';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pages/pricing';
  }
  public static get privacypolicy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
  public static get servicedetails(): string {
    return this.baseUrl + '/pages/service-details';
  }
  public static get termscondition(): string {
    return this.baseUrl + '/pages/terms-condition';
  }
  public static get addlisting(): string {
    return this.baseUrl + '/userpages/add-listing';
  }
  public static get bookmarks(): string {
    return this.baseUrl + '/userpages/bookmarks';
  }
  public static get dashboard(): string {
    return this.baseUrl + '/userpages/dashboard';
  }
  public static get messages(): string {
    return this.baseUrl + '/userpages/messages';
  }
  public static get mylisting(): string {
    return this.baseUrl + '/userpages/my-listing';
  }
  public static get profile(): string {
    return this.baseUrl + '/userpages/profile';
  }
  public static get reviews(): string {
    return this.baseUrl + '/userpages/reviews';
  }
  public static get error(): string {
    return this.baseUrl + '/error';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get forgotpassword(): string {
    return this.baseUrl + '/auth/forgot-password';
  }
  public static get login(): string {
    return this.baseUrl + '/auth/login';
  }
  public static get signup(): string {
    return this.baseUrl + '/auth/signup';
  }
}
