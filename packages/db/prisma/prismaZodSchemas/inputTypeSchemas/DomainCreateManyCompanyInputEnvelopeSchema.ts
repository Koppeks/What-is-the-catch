import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateManyCompanyInputSchema } from './DomainCreateManyCompanyInputSchema';

export const DomainCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.DomainCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DomainCreateManyCompanyInputSchema),z.lazy(() => DomainCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.DomainCreateManyCompanyInputEnvelope>;

export default DomainCreateManyCompanyInputEnvelopeSchema;
