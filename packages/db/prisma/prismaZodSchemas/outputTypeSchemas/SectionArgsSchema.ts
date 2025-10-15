import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionSelectSchema } from '../inputTypeSchemas/SectionSelectSchema';
import { SectionIncludeSchema } from '../inputTypeSchemas/SectionIncludeSchema';

export const SectionArgsSchema: z.ZodType<Prisma.SectionDefaultArgs> = z.object({
  select: z.lazy(() => SectionSelectSchema).optional(),
  include: z.lazy(() => SectionIncludeSchema).optional(),
}).strict();

export default SectionArgsSchema;
