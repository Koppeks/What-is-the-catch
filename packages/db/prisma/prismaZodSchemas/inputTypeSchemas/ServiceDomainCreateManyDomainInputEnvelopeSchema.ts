import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateManyDomainInputSchema } from './ServiceDomainCreateManyDomainInputSchema';

export const ServiceDomainCreateManyDomainInputEnvelopeSchema: z.ZodType<Prisma.ServiceDomainCreateManyDomainInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ServiceDomainCreateManyDomainInputSchema), z.lazy(() => ServiceDomainCreateManyDomainInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ServiceDomainCreateManyDomainInputEnvelopeSchema;
