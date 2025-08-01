import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface ModernDateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const ModernDateTimePicker = ({ value, onChange, error }: ModernDateTimePickerProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Generate next 7 days
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        isToday: i === 1
      });
    }
    return days;
  };

  // Generate time slots
  const getTimeSlots = () => {
    const slots = [];
    const startHour = 9;
    const endHour = 18;
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        slots.push({ value: time, label: displayTime });
      }
    }
    return slots;
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    if (selectedTime) {
      onChange(`${date}T${selectedTime}`);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onChange(`${selectedDate}T${time}`);
    }
  };

  const days = getNextDays();
  const timeSlots = getTimeSlots();

  return (
    <div className="space-y-4">
      {/* Date Selection */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Select Date
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {days.map((day) => (
              <Button
                key={day.date}
                variant={selectedDate === day.date ? "healthcare" : "outline"}
                className="h-auto p-3 flex flex-col items-center"
                onClick={() => handleDateSelect(day.date)}
              >
                <span className="text-xs font-medium">{day.label.split(' ')[0]}</span>
                <span className="text-sm">{day.label.split(' ').slice(1).join(' ')}</span>
                {day.isToday && (
                  <Badge variant="secondary" className="text-xs mt-1">Tomorrow</Badge>
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Time Selection */}
      {selectedDate && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Select Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.value}
                  variant={selectedTime === slot.value ? "healthcare" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => handleTimeSelect(slot.value)}
                >
                  {slot.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {error && (
        <p className="text-sm text-destructive mt-2">{error}</p>
      )}
      
      {selectedDate && selectedTime && (
        <div className="p-3 bg-healthcare-primary/10 rounded-lg border border-healthcare-primary/20">
          <p className="text-sm text-healthcare-text">
            <strong>Selected:</strong> {new Date(`${selectedDate}T${selectedTime}`).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} at {new Date(`${selectedDate}T${selectedTime}`).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            })}
          </p>
        </div>
      )}
    </div>
  );
};