import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateManyCompanyInputSchema } from './ServiceCreateManyCompanyInputSchema';

export const ServiceCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.ServiceCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServiceCreateManyCompanyInputSchema),z.lazy(() => ServiceCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ServiceCreateManyCompanyInputEnvelope>;

export default ServiceCreateManyCompanyInputEnvelopeSchema;
