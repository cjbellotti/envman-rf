EnvMan.Views.Entidad = Backbone.View.extend({

	initialize : function () {

		this.template = swig.compile( $('#entidad-screen-template').html());

	},

	events : {

		"click #aceptar" : "guardar"

	},

	guardar: function () {

		var id = this.model.get('ID');
		if (!id) {

			var id = 1;
			var ultima = window.collections.entidades.last();
			if (ultima) {
				id = ultima.get("ID") + 1;
			}

			this.model.set('ID', id);

		}

		this.model.set('NOMBRE', this.$el.find('#nombre').val());
		this.model.set('DESCRIPCION', this.$el.find('#descripcion').val());

		window.collections.entidades.add(this.model);

	},

	render : function () {

		var data = {};
		if (this.model) {

			data = this.model.toJSON();

		}

		this.$el.html(this.template(data));

	}

});