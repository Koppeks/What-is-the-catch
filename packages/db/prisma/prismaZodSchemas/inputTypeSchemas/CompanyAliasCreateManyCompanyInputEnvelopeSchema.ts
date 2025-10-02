import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasCreateManyCompanyInputSchema } from './CompanyAliasCreateManyCompanyInputSchema';

export const CompanyAliasCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.CompanyAliasCreateManyCompanyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CompanyAliasCreateManyCompanyInputSchema), z.lazy(() => CompanyAliasCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CompanyAliasCreateManyCompanyInputEnvelopeSchema;
