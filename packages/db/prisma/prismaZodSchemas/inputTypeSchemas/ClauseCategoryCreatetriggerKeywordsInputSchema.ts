import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseCategoryCreatetriggerKeywordsInputSchema: z.ZodType<Prisma.ClauseCategoryCreatetriggerKeywordsInput> = z.strictObject({
  set: z.string().array(),
});

export default ClauseCategoryCreatetriggerKeywordsInputSchema;
