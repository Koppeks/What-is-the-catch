import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutHeadingBlockInputSchema } from './SectionCreateWithoutHeadingBlockInputSchema';
import { SectionUncheckedCreateWithoutHeadingBlockInputSchema } from './SectionUncheckedCreateWithoutHeadingBlockInputSchema';
import { SectionCreateOrConnectWithoutHeadingBlockInputSchema } from './SectionCreateOrConnectWithoutHeadingBlockInputSchema';
import { SectionCreateManyHeadingBlockInputEnvelopeSchema } from './SectionCreateManyHeadingBlockInputEnvelopeSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';

export const SectionCreateNestedManyWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionCreateNestedManyWithoutHeadingBlockInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutHeadingBlockInputSchema), z.lazy(() => SectionCreateWithoutHeadingBlockInputSchema).array(), z.lazy(() => SectionUncheckedCreateWithoutHeadingBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutHeadingBlockInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SectionCreateOrConnectWithoutHeadingBlockInputSchema), z.lazy(() => SectionCreateOrConnectWithoutHeadingBlockInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SectionCreateManyHeadingBlockInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
});

export default SectionCreateNestedManyWithoutHeadingBlockInputSchema;
