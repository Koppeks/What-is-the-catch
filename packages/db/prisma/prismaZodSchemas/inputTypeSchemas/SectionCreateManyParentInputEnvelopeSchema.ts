import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateManyParentInputSchema } from './SectionCreateManyParentInputSchema';

export const SectionCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.SectionCreateManyParentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SectionCreateManyParentInputSchema), z.lazy(() => SectionCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SectionCreateManyParentInputEnvelopeSchema;
