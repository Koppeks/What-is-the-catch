import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateManyCompanyInputSchema } from './DomainCreateManyCompanyInputSchema';

export const DomainCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.DomainCreateManyCompanyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DomainCreateManyCompanyInputSchema), z.lazy(() => DomainCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DomainCreateManyCompanyInputEnvelopeSchema;
