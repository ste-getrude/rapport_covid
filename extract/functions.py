'''
Created on Sep. 28, 2021

@author: Louis-Philippe
'''
# System libraries
import datetime as dt

def is_yesterday_open(date_dt):
    yesterday = date_dt - dt.timedelta(days=1)
    
    days_off_list = [dt.date(2021, 10, 11),
                     dt.date(2021, 12, 22),
                     dt.date(2021, 12, 23),
                     dt.date(2021, 12, 24),
                     dt.date(2021, 12, 27),
                     dt.date(2021, 12, 28),
                     dt.date(2021, 12, 29),
                     dt.date(2021, 12, 30),
                     dt.date(2021, 12, 31),
                     dt.date(2022, 1, 3),
                     dt.date(2022, 1, 4),
                     dt.date(2022, 2, 28),
                     dt.date(2022, 3, 1),
                     dt.date(2022, 3, 2),
                     dt.date(2022, 3, 3),
                     dt.date(2022, 3, 4),
                     dt.date(2022, 4, 15),
                     dt.date(2022, 4, 18),
                     dt.date(2022, 4, 29),
                     dt.date(2022, 5, 13),
                     dt.date(2022, 5, 23),
                     dt.date(2022, 6, 3)
                    ]

#     is yesterday not in the days off list AND is it not a weekend ?
    if yesterday not in days_off_list and date_dt.strftime("%w") not in ['0','6']:
        return yesterday
    else:
        day_before_yesterday = yesterday - dt.timedelta(days=1)
        return is_yesterday_open(day_before_yesterday)
    
def write_to_identification_du_cas(test, ws_id_cas):
    data_dict = test[0]
    start_row = test[1]

    for row in range(0, len(data_dict)):
        row_number_str = str(start_row + row)
        cell_name = ws_id_cas['B' + row_number_str].value
        if cell_name in data_dict.keys():
            ws_id_cas['C' + row_number_str] = data_dict[cell_name].strip()