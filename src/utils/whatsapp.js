/**
 * WhatsApp Link Generator & Messaging Helper
 * Formats clean, structured booking enquiries for Prabhuling Travel Agency
 */

export function buildWhatsAppLink(whatsappNumber, data) {
  // Clean phone number (remove spaces, pluses, dashes)
  const cleanNumber = (whatsappNumber || "+919876543210").replace(/[^0-9]/g, '');

  let text = `*PRABHULING TRAVEL AGENCY — ENQUIRY*\n`;
  text += `--------------------------------------\n`;

  if (data.serviceType === "Bus") {
    text += `🚌 *SERVICE*: Bus Ticket Booking\n`;
    if (data.selectedBus) text += `🚌 *BUS*: ${data.selectedBus}\n`;
    text += `📍 *FROM*: ${data.from || 'Not specified'}\n`;
    text += `📍 *TO*: ${data.to || 'Not specified'}\n`;
    text += `📅 *DATE*: ${data.date || 'Flexible'}\n`;
    text += `👥 *PASSENGERS*: ${data.passengers || '1'}\n`;
    if (data.seatType) text += `💺 *PREFERENCE*: ${data.seatType}\n`;
  } else if (data.serviceType === "Flight") {
    text += `✈️ *SERVICE*: Flight Ticket Booking\n`;
    text += `📍 *FROM*: ${data.from || 'Not specified'}\n`;
    text += `📍 *TO*: ${data.to || 'Not specified'}\n`;
    text += `📅 *DEPARTURE DATE*: ${data.date || 'Flexible'}\n`;
    text += `👥 *PASSENGERS*: ${data.passengers || '1'}\n`;
    if (data.flightClass) text += `💺 *CLASS*: ${data.flightClass}\n`;
  } else if (data.serviceType === "Train") {
    text += `🚆 *SERVICE*: Train Ticket Assistance\n`;
    text += `📍 *FROM*: ${data.from || 'Not specified'}\n`;
    text += `📍 *TO*: ${data.to || 'Not specified'}\n`;
    text += `📅 *JOURNEY DATE*: ${data.date || 'Flexible'}\n`;
    text += `👥 *PASSENGERS*: ${data.passengers || '1'}\n`;
    if (data.quota) text += `🎫 *QUOTA*: ${data.quota}\n`;
  } else if (data.serviceType === "TourPackage") {
    text += `🌴 *SERVICE*: Tour Package Enquiry\n`;
    text += `📌 *PACKAGE*: ${data.packageTitle || 'Custom Tour'}\n`;
    text += `📅 *PREFERRED DATE*: ${data.date || 'Flexible'}\n`;
    text += `👥 *GUESTS*: ${data.passengers || '2'}\n`;
  } else if (data.serviceType === "BusRental") {
    text += `🚐 *SERVICE*: Bus / Vehicle Rental Enquiry\n`;
    if (data.selectedBus) text += `🚌 *VEHICLE*: ${data.selectedBus}\n`;
    text += `📍 *PICKUP*: ${data.from || 'Not specified'}\n`;
    text += `📍 *DESTINATION*: ${data.to || 'Not specified'}\n`;
    text += `📅 *TRIP DATES*: ${data.date || 'Flexible'}\n`;
    text += `👥 *GROUP SIZE*: ${data.passengers || 'Not specified'}\n`;
    if (data.minKmPerDay) text += `🛣️ *MIN KM/DAY*: ${data.minKmPerDay} km\n`;
    if (data.battaPerDay) text += `💰 *DRIVER BATTA*: ₹${data.battaPerDay}/day\n`;
  } else {
    text += `ℹ️ *SERVICE*: General Travel Assistance\n`;
  }

  if (data.name) text += `\n👤 *CUSTOMER NAME*: ${data.name}`;
  if (data.phone) text += `\n📞 *CONTACT*: ${data.phone}`;
  if (data.message) text += `\n💬 *NOTE*: ${data.message}`;

  text += `\n--------------------------------------\n`;
  text += `*Sent from Website Enquiry Panel*`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
