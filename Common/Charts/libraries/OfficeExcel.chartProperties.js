if (typeof(OfficeExcel) == 'undefined') OfficeExcel = {};

OfficeExcel.Title = function()
{
    this._text = '';

    this._background = null;
    this._color = null;

    this._hpos = null;
    this._vpos = null;

    this._bold = true;
    this._font = null;
    this._size = null;
};

OfficeExcel.Gutter = function()
{
    this._left      = 25;
    this._right     = 25;
    this._top       = 25;
    this._bottom    = 25;
}

OfficeExcel.OtherProps = function()
{
    this._curvy = false;
    this._curvy_factor = 0.25; // should be 0 - 0.5

    this._noredraw = false;

    this._adjustable = false;

    this._xmin = 0;
    this._xmax = 0;
    this._ymin = 0;
    this._ymax = 0;

    this._outofbounds = false;

    this._noaxes = false;
    this._noxaxis = false;
    this._noyaxis = false;

    this._xaxispos = 'bottom';
    this._yaxispos = 'left';

    this._strokecolor = '#666';

    this._hmargin = 5;
    this._vmargin = 3;

    this._numyticks = 10;

    this._text_color = 'black';
    this._text_font = 'Arial';
    this._text_size = 10;
    this._text_angle = 0;

    this._axis_color = 'black';

    this._units_pre = '';
    this._units_post = '';
    this._units_ingraph = false;

    this._scale_round = false;
    this._scale_decimals = 0;
    this._scale_point = '.';
    this._scale_thousand = ',';
    this._scale_formatter = null;

    this._colors = ['rgb(0,0,255)', '#0f0', '#00f', '#ff0', '#0ff', '#0f0'];
    this._colors_sequential = false;
    this._colors_reverse = false;
    this._colors_alternate = null;

    this._title_yaxis_align = 'left';
    this._title_yaxis_position = 'left';

    this._radius = null;

    this._exploded = 0;

    this._segments = [];

    this._centerx = null;
    this._centery = null;

    this._border = false;
	this._area_border = true;	// граница для всей области диаграммы
    this._border_color = 'rgba(255,255,255,0.5)';

    this._align = 'center';

    this._effect_roundrobin_multiplier = 1;

    this._xlabels = true;
    this._xlabels_offset = 0;
    this._xlabels_inside = false;
    this._xlabels_inside_color = 'rgba(255,255,255,0.5)';

    this._ylabels = true;
    this._ylabels_count = 5;
    this._ylabels_inside = false;
    this._ylabels_inside_color = null;
    this._ylabels_specific = null;
    this._ylabels_invert = false;

    this._labels = [];
    this._labels_ingraph = null;
    this._labels_above = false;
    this._labels_above_decimals = 0;
    this._labels_above_size = null;
    this._labels_above_angle = null;
    this._labels_sticks = false;
    this._labels_sticks_length = 7;
    this._labels_sticks_color = '#aaa';
    this._labels_specific_align = 'left';

    this._background_barcolor1 = 'rgba(0,0,0,0)';
    this._background_barcolor2 = 'rgba(0,0,0,0)';
    this._background_grid = true;
    this._background_grid_color = '#ddd';
    this._background_grid_width = 1;
    this._background_grid_hsize = 20;
    this._background_grid_vsize = 20;
    this._background_grid_hlines = true;
    this._background_grid_vlines = true;
    this._background_grid_border = true;
    this._background_grid_autofit = true;
    this._background_grid_autofit_numhlines = 5;
    this._background_grid_autofit_numvlines = 20;
    this._background_grid_autofit_align = false;
    this._background_vbars = null;
    this._background_hbars = null;

    this._line_visible = true;

    this._variant = null;

    this._stepped = false;

    this._xticks = null;

    this._linewidth = 1.01;

    this._fillstyle = null;

    this._smallxticks = 3;
    this._largexticks = 5;
    this._smallyticks = 3;
    this._ticksize = 3;
    this._tickdirection = -1;

    this._tickmarks = null; // can be reverse
    this._tickmarks_linewidth = null;
    this._tickmarks_dot_color = 'white';

    this._key = [];
    this._key_background = 'white';
    this._key_position = 'graph';
    this._key_position_x = null;
    this._key_position_y = null;
    this._key_position_gutter_boxed = true;
    this._key_rounded = true;
    this._key_linewidth = 1;
    this._key_color_shape = 'square';
    this._key_colors = null;
    this._key_halign = 'right';
    this._key_text_size = 10;

    this._noendxtick = false;
    this._noendytick = true;

    this._axesontop = false;

    this._filled = false;
    this._filled_range = false;
    this._filled_accumulative = true;

    this._backdrop = false;
    this._backdrop_size = 30;
    this._backdrop_alpha = 0.2;

    this._grouping = 'grouped';

    this._xaxis = true;

    this._defaultcolor = 'white';

    this._line = false;
    this._line_linewidth = 1;
    this._line_colors = ['green', 'red'];
    this._line_stepped = false;

    this._boxplot_width = 1;
    this._boxplot_capped = true;

    this._xscale = false;
    this._xscale_units_pre = '';
    this._xscale_units_post = '';
    this._xscale_numlabels = 10;
    this._xscale_formatter = null;

    this._boxplot = false;
}