/**
 *
 *
 *
 *
 */

var Calendar = function(divId, yy, mm, dd) {

    this.divId = divId; 

    // DIAS DE LA SEMANA
    this.DaysOfWeek = [ 'D','L','M','M','J','V','S'	];

    // MESES
    this.Months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

    // CONFIGURACION MES Y ANNIO
    this.dateOrigin = new Date( yy, mm - 1, dd ); ;
    this.dateFinish = new Date( yy, mm - 1, dd ); ;
    
    this.CurrentMonth = this.dateOrigin.getMonth() ;
    this.CurrentYear = this.dateOrigin.getFullYear();
    
}

// YENDO AL SIGUIENTE MES
Calendar.prototype.nextMonth = function() {
    if ( this.CurrentMonth == 11 ) {
        this.CurrentMonth = 0;
        this.CurrentYear = this.CurrentYear + 1;
    }
    else {
        this.CurrentMonth = this.CurrentMonth + 1;
    }
    this.showCurrent();
};

// YENDO AL MES ANTERIOR
Calendar.prototype.previousMonth = function() {
    if ( this.CurrentMonth == 0 ) {
        this.CurrentMonth = 11;
        this.CurrentYear = this.CurrentYear - 1;
    }
    else {
        this.CurrentMonth = this.CurrentMonth - 1;
    }
    this.showCurrent();
};

// MES ACTUAL
Calendar.prototype.showCurrent = function() {
    this.showMonth(this.CurrentYear, this.CurrentMonth);
};

// MOSTRAR MES/ANNIO
Calendar.prototype.showMonth = function(y, m) {

    var d = new Date()
        
        , firstDayOfMonth = new Date(y, m, 1).getDay()
   
        , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
        
        , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    var dowStyle = '' ;
    var html = '';
    
    html += '<div class="calendar">';
    html += '<table>';

    
    html += '<tr><td colspan="7">' + this.Months[m] + ' - ' + y + '</td></tr>';

    
    html += '<tr>';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
        html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';

   
    var i=1;
    do {

        var dow = new Date(y, m, i).getDay();

       
        if ( dow == 0 ) {
            html += '<tr>';
        }
       
        else if ( i == 1 ) {
            html += '<tr>';
            var k = lastDayOfLastMonth - firstDayOfMonth+1;
            for(var j=0; j < firstDayOfMonth; j++) {
                html += '<td class="not-current">' + k + '</td>';
                k++;
            }
        }
        
      
        if ( dow == 0 || dow== 6 ) {
            dowStyle = "weekEnd";
        } else {
            dowStyle = "workDay";
        }

        
        html += '<td class="'+dowStyle+'">' + i + '</td>';

       
        if ( dow == 6 ) {
            html += '</tr>';
        }
     
        else if ( i == lastDateOfMonth ) {
            var k=1;
            for(dow; dow < 6; dow++) {
                html += '<td class="not-current">' + k + '</td>';
                k++;
            }
        }

        i++;
    }while(i <= lastDateOfMonth);

   
    html += '</table>';
    html += '</div>';

    document.getElementById(this.divId).innerHTML += html;
};
