import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
	/**
	 * Contact enquiry submission. Fields arrive as multipart form data
	 * (accept: 'form') and are validated here — the client's `required` /
	 * `type="email"` attributes are a convenience layer only.
	 */
	contact: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string().min(1, 'Please tell us your name.'),
			email: z
				.string()
				.min(1, 'Please enter your email address.')
				.email('Please enter a valid email address.'),
			company: z.string().optional(),
			phone: z.string().optional(),
			message: z.string().min(1, 'Please tell us what you need.'),
			/** Honeypot — humans never see or fill this field. */
			website: z.string().optional(),
		}),
		handler: async (input) => {
			// Bots that fill the honeypot get a quiet "success" and no delivery.
			if (input.website) return { received: true };

			// Delivery is intentionally abstract for now. Wire the enquiry to an
			// email provider, CRM or database here — read credentials from
			// environment variables (astro:env / import.meta.env), never from
			// client code.
			//
			//   await sendEnquiry({
			//     name: input.name,
			//     email: input.email,
			//     company: input.company,
			//     phone: input.phone,
			//     message: input.message,
			//   });
			console.info(`[contact] enquiry from ${input.name} <${input.email}>`);

			return { received: true };
		},
	}),
};
