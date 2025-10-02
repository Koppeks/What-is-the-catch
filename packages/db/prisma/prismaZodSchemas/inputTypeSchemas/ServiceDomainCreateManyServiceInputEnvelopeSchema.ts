import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateManyServiceInputSchema } from './ServiceDomainCreateManyServiceInputSchema';

export const ServiceDomainCreateManyServiceInputEnvelopeSchema: z.ZodType<Prisma.ServiceDomainCreateManyServiceInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ServiceDomainCreateManyServiceInputSchema), z.lazy(() => ServiceDomainCreateManyServiceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ServiceDomainCreateManyServiceInputEnvelopeSchema;
