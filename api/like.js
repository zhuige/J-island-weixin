import {
  HTTP
} from '../utils/http';

export class LikeModel extends HTTP {
  like(behavior, artID, category) {
    let url = behavior == 'like' ? '/like' : '/like/cancel';
    this.request({
      url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      },
      success: function (res) {}
    });
  }

  getClassLikeStatus(artID, category, callback) {
    this.request({
      url: '/classic/' + category + '/' + artID + '/favor',
      success: callback
    });
  }
}