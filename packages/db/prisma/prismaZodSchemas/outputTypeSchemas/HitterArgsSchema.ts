import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterSelectSchema } from '../inputTypeSchemas/HitterSelectSchema';
import { HitterIncludeSchema } from '../inputTypeSchemas/HitterIncludeSchema';

export const HitterArgsSchema: z.ZodType<Prisma.HitterDefaultArgs> = z.object({
  select: z.lazy(() => HitterSelectSchema).optional(),
  include: z.lazy(() => HitterIncludeSchema).optional(),
}).strict();

export default HitterArgsSchema;
