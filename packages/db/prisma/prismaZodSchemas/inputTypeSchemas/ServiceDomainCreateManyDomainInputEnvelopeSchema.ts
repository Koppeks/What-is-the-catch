import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateManyDomainInputSchema } from './ServiceDomainCreateManyDomainInputSchema';

export const ServiceDomainCreateManyDomainInputEnvelopeSchema: z.ZodType<Prisma.ServiceDomainCreateManyDomainInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServiceDomainCreateManyDomainInputSchema),z.lazy(() => ServiceDomainCreateManyDomainInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ServiceDomainCreateManyDomainInputEnvelope>;

export default ServiceDomainCreateManyDomainInputEnvelopeSchema;
