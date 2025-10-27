import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HitterCreatetriggerKeywordsInputSchema: z.ZodType<Prisma.HitterCreatetriggerKeywordsInput> = z.strictObject({
  set: z.string().array(),
});

export default HitterCreatetriggerKeywordsInputSchema;
