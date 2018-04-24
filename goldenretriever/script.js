$('#siteModal').on('show.bs.modal', function (event) {
    $(this)
      .find('.modal-content img')
      .attr('src', $(event.relatedTarget).data('highres'));
  });
  