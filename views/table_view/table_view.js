//=============================================================================
//  Table View
//=============================================================================
Template.TableView.helpers({
  tableDetailView: function () {
    return Session.get('tableDetail')
  },
})
Template.TableView.rendered = function () {
  console.log(this);

  this.find('#table')._uihooks = {
    insertElement: function(node, next) {

      var $node = $(node);
      var $lastNode = $(this.lastNode);

      var nodeData = Blaze.getData(node);
      var lastNodeData = Blaze.getData(this.lastNode);
      console.log("last Node data: ", $lastNode);

      if (nodeData.orbitViewIndex === 1) {

          $node
            .insertBefore(next)
            .velocity({
              translateX: ['0%', '100%'],
            }, {
              duration: 500,
              progress: function(elements, percentComplete, timeRemaining, timeStart) {
                // console.log('adding: ' + (percentComplete * 100) + "%");
                // console.log(timeRemaining + "ms remaining!");
              }
            });


          $lastNode
            .velocity({
              translateX: ['-50%', '0%'],
            }, {
              complete: function() { $lastNode.remove(); },
              duration: 500,
              progress: function(elements, percentComplete, timeRemaining, timeStart) {
                // console.log('removing: ' + (percentComplete * 100) + "%");
                // console.log(timeRemaining + "ms remaining!");
              }
            });
      } else {
          $node
            .insertBefore(next)
            .velocity({
              translateX: ['0%', '-50%'],
            }, {
              duration: 500,
              progress: function(elements, percentComplete, timeRemaining, timeStart) {
                // console.log('adding: ' + (percentComplete * 100) + "%");
                // console.log(timeRemaining + "ms remaining!");
              }
            });


          $lastNode
            .velocity({
              translateX: ['100%', '0%'],
            }, {
              complete: function() { $lastNode.remove(); },
              duration: 500,
              progress: function(elements, percentComplete, timeRemaining, timeStart) {
                // console.log('removing: ' + (percentComplete * 100) + "%");
                // console.log(timeRemaining + "ms remaining!");
              }
            });
      }

    },
    removeElement: function(node) {
      var $node = $(node);
      console.log(node);
      this.lastNode = node;
    }
  }
}

//=============================================================================
//  Table List View
//=============================================================================
Orbit.TableListView = function (options) {
  options = options || {};
  this.selector = options.selector || '.table-list-view';
  this.transitionClass = options.transitionClass || 'slide-along-center-to-left';
}
Orbit.TableListView.prototype = new Orbit.View();

Template.TableListView.created = function () {
  console.log(this.data);
  // var _tableListView = new Orbit.TableListView();
  // if (this.data && this.data.handle)
  //   Orbit[this.data.handle] = _tableListView;
  // _.extend(this.__proto__, {
  //   _tableListView: _tableListView
  // });

  // var data =  this.data || {};
  this.data.orbitView = this.data.view || 'tableListView';
  this.data.orbitViewIndex = this.data.index || 0;

  console.log(this.data);
};


//=============================================================================
//  Table Detail View
//=============================================================================
Orbit.TableDetailView = function (options) {
  options = options || {};
  this.selector = options.selector || '.table-detail-view';
  this.transitionClass = options.transitionClass || 'slide-along-right-to-center';
}
Orbit.TableDetailView.prototype = new Orbit.View();



Template.TableDetailView.helpers({
  template: function () {
    return { template: this.template }
  },
});

Template.TableDetailView.created = function () {
  var _tableDetailView = new Orbit.TableDetailView();
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _tableDetailView;
  _.extend(this.__proto__, {
    _tableDetailView: _tableDetailView
  });

  //=============================================================================
  //  Need to pass data through the blaze view?
  //=============================================================================
  // This is where we have to set our
  // data if we want to access it later
  var data =  this.data || {};
  this.data.orbitView = data.view || 'tableDetailView';
  this.data.orbitViewIndex = data.index || 1;
};

//=============================================================================
//  Table List Item
//=============================================================================
// Router.current().route.getName()


// Session.setDefault('selectedTableItem', '');
// Session.setDefault('isTableListView', true);
// Session.setDefault('detailAlreadyVisible', false);

// Template.TableView.events({
//   'click .item': function (e) {
//     Session.set('selectedTableItem', this._id);
//     Session.set('triggerTransition', 'fromList');
//   },
// });
// Template.TableView.helpers({
//   // isTableListView: function () {
//   //   return Session.get('isTableListView');
//   // },
//   // isTableDetailView: function () {
//   //   return ! Session.equals('selectedTableItem', '');
//   // },
// });

// Template.TableView.destroyed = function () {
//   // console.log("table view destroyed", this);
//   // Session.set('detailAlreadyVisible', false);
// }
// Template.TableView.rendered = function () {
//   // console.log("from detail: ", Session.equals('triggerTransition', 'fromDetail'));
//   console.log('tableView: ', this);
//   this.autorun(function () {
//     if (Session.equals('triggerTransition', 'fromDetail')) {
//       Orbit.tableView.transitionListView();
//       Session.set('triggerTransition', false);
//     }
//   })

// }
// Template.TableDetailView.rendered = function () {
//   this.autorun(function () {
//     var detailView = $('table-detail-view');
//     if (! detailView.hasClass('slide-along-right-to-center') &&
//       Session.equals('triggerTransition', 'fromList')) {
//       // console.log("transit");
//       Orbit.tableView.transitionDetailView();
//       Session.set('triggerTransition', false);
//     } else if (! detailView.hasClass('slide-along-right-to-center')) {
//       // console.log("show");
//       // Orbit.tableView.showDetailView();
//     }
//   });
// }
// // Template.TableView.rendered = function () {

// // }
// Template.TableDetailView.destroyed = function () {
//   Session.set('detailAlreadyVisible', false);
// }